/*interface GitHubData {
    followers: number,
    avatar_url: string,
    public_repos: number
}*/

import { useLoaderData } from "react-router"

function GitHub() {
    /*const [data, setData] = useState<GitHubData>({ followers: 0, avatar_url: " ", public_repos: 0 });
    useEffect(() => {
        fetch('https://api.github.com/users/VasuBhakt')
            .then(res => res.json())
            .then(data => setData(data));
    })*/
    const data = useLoaderData();
    return (
        <>
            <div className="bg-gray-600 text-white text-3xl p-4">
                <div className="flex justify-center">
                    GitHub Followers : {data.followers}
                </div>
                <div className="flex justify-center">
                    <img className="p-3" src={data.avatar_url} alt="GitHub Profile" />
                </div>
            </div>
        </>
    )
}

export default GitHub

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/VasuBhakt')
    return response.json();
}