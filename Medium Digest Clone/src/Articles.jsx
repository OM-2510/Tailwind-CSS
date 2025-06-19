import { useEffect, useState } from "react";

// Helper to extract elements from description
function parseDescriptionHTML(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;

  const imgEl = container.querySelector("img");
  const snippetEl = container.querySelector(".medium-feed-snippet");
  const readMoreEl = container.querySelector(".medium-feed-link a");

  return {
    image: imgEl?.src || null,
    snippet: snippetEl?.innerText || "",
    readMoreLink: readMoreEl?.href || "",
  };
}

export default function ArticleSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const feedUrl = "https://medium.com/feed/tag/react";
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const parsedArticles = (data.items || []).map((item) => {
          const parsed = parseDescriptionHTML(item.description);
          return {
            ...item,
            parsedImage: parsed.image,
            parsedSnippet: parsed.snippet,
            parsedLink: parsed.readMoreLink,
          };
        });

        setArticles(parsedArticles);
      } catch (err) {
        console.error("Error fetching feed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return (
    <div className="h-full w-[42rem] p-4 mt-8 flex flex-col gap-6">
      {loading ? (
        <p className="text-gray-500">Loading articles...</p>
      ) : articles.length > 0 ? (
        articles.map((entry, index) => (
            <a
            href={entry.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-5 border-b-1 border-gray-200 pb-4"
            >
              <div className="flex-1">
                <p className="text-sm text-black font-extralight mt-1 hover:underline text-decoration-2 pb-5">
                  {entry.author} 
                </p>
                  <div className="flex flex-row justify-between">
                      <div className="flex flex-col justify-items-start w-[65%]">
                        <h2 className="text-2xl font-extrabold text-black">
                            {entry.title}
                        </h2>
                      <p className="text-m text-gray-700 mt-2 line-clamp-2 pb-5">
                        {entry.parsedSnippet}</p>

                      </div>
                      
                      {entry.parsedImage && (
                          <img
                          src={entry.parsedImage}
                          alt="Unable to load Thumbnail"
                          className="w-[30%] max-h-30 object-contain"
                          />
                      )}

                </div>
              <div className="text-sm pt-5 pb-3">
                {new Date(entry.pubDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              
              
            </div>
          </a>
        ))
      ) : (
        <p className="text-red-500">No articles found.</p>
      )}
    </div>
  );
}
