const getAllProducts = async (req, res) => {
    res.status(200).json({
        msg: "I m getALLProducts"
    });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({
        msg: "I m getALLProductsTesting"
    });
};

module.exports = {getAllProducts, getAllProductsTesting}