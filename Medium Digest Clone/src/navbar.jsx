export default function Navbar(){
    const fontStyles = "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24";

    return(
        <nav className="flex justify-between p-2.5 border-b-1 border-gray-200">
        <div className="flex justify-between items-center w-95">
          <a href="#" className="text-3xl pl-2.5 font-bold">Medium</a>

          <form action="submit" className="flex items-center rounded-3xl bg-gray-100">
            <button>
              <span
                className="material-symbols-outlined px-2 py-1 font-extralight text-sm"
                style={{ fontVariationSettings: fontStyles }}
              >
                search
              </span>
            </button>

            <input
              className="select-none outline-none"
              type="text"
              name="Search"
              id="search"
              placeholder="Search"
            />
          </form>
        </div>

        <div className="flex justify-around items-center w-57 text-gray-600">
          <a href="#" className="flex items-center hover:text-black justify-between w-17.5 font-extralight text-sm">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: fontStyles }}
            >
              edit_note
            </span>
            Write
          </a>

          <a href="#">
            <span
              className="material-symbols-outlined hover:text-black"
              style={{ fontVariationSettings: fontStyles }}
            >
              notifications
            </span>
          </a>

          <a href="#">
            <span
              className="material-symbols-outlined hover:text-black"
              style={{ fontVariationSettings: fontStyles }}
            >
              account_circle
            </span>
          </a>
        </div>
      </nav>
    )
}