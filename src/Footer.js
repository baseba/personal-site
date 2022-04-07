

function Footer() {
    return (
        <div class=" flex content-end fixed sm:fixed inset-x-0 bottom-0 bg-[#73BDAB] overflow-auto m-auto">
            <div class="flex sm:items-center sm:flex-row flex-col  overflow-auto">

                <h1 class="sm:px-8 text-black text-lg font-bold">Contact me: </h1>

                <a class=" group flex flex-row hover:bg-[#6F5643] hover:item sm:p-4 h-full"
                 href="https://github.com/baseba">
                    <h1 class="text-black text-center text-lg group-hover:text-white px-2 group-hover:text-xl">🖥 GitHub:</h1>
                    <h1 class="text-black text-center text-lg group-hover:text-[#EECCEE] group-hover:text-xl">baseba</h1>
                </a>

                <a class=" group flex flex-row justify-center hover:bg-[#6F5643] hover:item sm:p-4 h-full"
                 href="https://www.linkedin.com/in/baseba/">
                    <h1 class="text-black text-center text-lg group-hover:text-white px-2 group-hover:text-xl">📲 LinkedIn:</h1>
                    <h1 class="text-black text-center text-lg group-hover:text-[#EECCEE] group-hover:text-xl">baseba</h1>
                </a>


            </div>

        </div>

    );
}

export default Footer;