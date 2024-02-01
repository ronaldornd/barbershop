import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
    return (
        <div className="flex items-center flex-row gap-2">
            <Input placeholder="Busque uma barbearia!" />
            <Button variant="default" >
                <SearchIcon size={20} />
            </Button>
        </div>
    );
}

export default Search;