module.exports = function(req, res, next) {
    this.port = 3004;
    this.api = "https://api.mercadolibre.com/"
    return this;
}