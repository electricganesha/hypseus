import db from "../../../utils/db";

const getPosts = async(req, res) => {
    try {
        switch (req.method) {
            case "GET": {
                let query = db.collection("items");
                const { slug } = req.query;
                query.where("slug", "==", slug).get().then((items) => {
                    const itemsData = items.docs.map((item) => item.data());
                    res.status(200).json(itemsData);
                });
                
                break;
            }
            default: {
                res.status(405).end();
            }
        }
    } catch (error) {
        console.log(error);
        res.statusMessage = "Could not retrieve item";
        res.status(503).end();
    }
}

export default getPosts;
