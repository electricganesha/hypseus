import db from "../../../utils/db";

const getItems = async(req, res) => {
    try {
        switch (req.method) {
            case "GET": {
                let query = db.collection("items");

                if(req.query.category) {
                    query = query.where('type', '==', req.query.category);
                }

                if(req.query.sort) {
                    query = query.orderBy(req.query.sort, req.query.order);
                } else {
                    query = query.orderBy("name", "asc");
                }
               
                query.get().then((items) => {
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
        res.statusMessage = "Could not retrieve items";
        res.status(503).end();
    }
}

export default getItems;
