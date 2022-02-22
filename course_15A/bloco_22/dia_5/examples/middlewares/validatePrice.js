const validatePrice = (req, res, next) => {
 const { price } = req.body;
if (price === undefined || typeof +price !== 'number' || +price < 0) return res.status(400).json({ message: 'Price inválido!' })

res.status(200).json({ message: `O preço do produto é: ${price}` });

};

module.exports = validatePrice;