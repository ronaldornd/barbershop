import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit">Confirmado</Badge>
                    <h2>Corte de Cabelo</h2>
                    <div className="flex flex-row items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <h2 className="text-sm">Barberrrrr</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
                    <p className="text-sm">Março</p>
                    <p className="text-xl">05</p>
                    <p className="text-sm">23:59</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default BookingItem;