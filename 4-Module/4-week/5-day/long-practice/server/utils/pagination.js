// Phase 11: Make a middleware that will create pagination query options from
    // the query parameters
const paginateQueryOptions = (req, res, next) => {
    let { page, size } = req.query;

    try {
        page = parseInt(page);
        size = parseInt(size);
    } catch {
        // default page and size
        page = 1;
        size = 10;
    }

    const pagination = {};

    if (
        Number.isInteger(page) && Number.isInteger(size) &&
        page > 0 && size > 0 && size <= 200
    ) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    } else if (!(page === 0 && size === 0)) {
        res.status(400);
        res.json({
            message: 'Requires valid page and size params'
        });
        return;
    }

    req.query.pagination = pagination;
    next();
};

module.exports = paginateQueryOptions;