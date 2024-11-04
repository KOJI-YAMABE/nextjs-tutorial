import { BBSCardList } from "@/app/components/BBSCardList";
import { BBSPost } from "@/app/types/types";

async function getBBSAllData() {
    const response = await fetch("http://localhost:3000/api/post", {
        cache: "no-store",
    })

    const bbsallData: BBSPost[] = await response.json();
    return bbsallData;
}

export default async function Home() {
    const bbsallData = await getBBSAllData();

    return (
        <main>
            <BBSCardList bbsallData={bbsallData} />
        </main>
    );
}
