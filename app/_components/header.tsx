import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Card>
            <CardContent className="px-5 py-8 justify-between flex flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
                <Button variant="outline" size="icon" className="p-1" >
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>

    );
}
 
export default Header;