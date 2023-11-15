import Container from "postcss/lib/container";

const Navbar = () => {
    return ( 
    
    <div className="sticky top-0 width-full bg-slate-200 z-30 showd-sm">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex items-center justify-between gap-3 md:gap-0">
                    <link href="/">Shope Now</link>
                    <div className="hidden md:block">Search</div>
                    <div className="flex items-center justify-between gap-8 md:gap-12">Cartcount</div>
                    <div>UserMenu</div>
                </div>
            </Container>

        </div>
    </div> );
}
 
export default Navbar;