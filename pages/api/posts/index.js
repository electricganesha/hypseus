import db from "../../../utils/db";

const getPosts = async(req, res) => {
    try {
        switch (req.method) {
            case "GET": {
                let query = db.collection("posts");

                query.get().then((posts) => {
                    const postsData = posts.docs.map((post) => post.data());
                    res.status(200).json(postsData);
                });
                
                break;
            }
            default: {
                res.status(405).end();
            }
        }
    } catch (error) {
        console.log(error);
        res.statusMessage = "Could not retrieve posts";
        res.status(503).end();
    }
}

export default getPosts;
