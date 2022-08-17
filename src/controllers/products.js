const getAllProducts = (req, res) => {
    try {
        console.log('Here are all the proucts');
        res.status(200).json({success: true})

    } catch (error) {
        console.log(error);
    }
};

const getProduct = (req, res) => {
    try {
        console.log('Here is a single product');
        res.status(200).json({success: true})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllProducts, 
    getProduct
}