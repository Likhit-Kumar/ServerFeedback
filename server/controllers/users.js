import UserData from "../models/userData.js"

export const getUsers = async (req, res) => {
    console.log(req.body);
    const {type, query} = req.body;
    try {
        let users;

        switch(type) {
            case 'text':
                users = await UserData.find({$text: { $search: query }})
                console.log(users)
                break;
                // const userData = await UserData.find();
        }
        if(!users.length > 0) {
            users = await UserData.find({})
        }
        res.status(200).json({users})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}