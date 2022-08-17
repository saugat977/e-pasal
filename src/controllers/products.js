const getAllProducts = (req, res) => {
    try {
        console.log('Here are all the proucts');
        res.status(200).json({success: true})

    } catch (error) {
        res.status(404).json({error:error})
    }
};

const getProduct = (req, res) => {
    try {
        console.log('Here is a single product');
        res.status(200).json({success: true})
    } catch (error) {
        res.status(404).json({error:error})
    }
}

module.exports = {
    getAllProducts, 
    getProduct
}