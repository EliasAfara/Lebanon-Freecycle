module.exports = class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryobj = { ...this.queryString };
    // console.log(`Query: ${JSON.stringify(queryobj)}`);
    const excludedfields = ['page', 'sort', 'limit', 'name'];
    excludedfields.forEach((el) => delete queryobj[el]); // DELETE from queryString Object
    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
    this.query.find(JSON.parse(querystr)).sort({ date: -1 });
    return this;
  }

  partialSearch() {
    // $options:
    // "i" allow us to do a case-insensitive search ( upper and lower case will both match ).
    // "g" for global search.

    if (this.queryString.name) {
      const regex_query = {
        name: { $regex: '.*' + this.queryString.name + '.*', $options: 'gi' },
      };
      this.query.find(regex_query).sort({ date: -1 });
      // console.log(regex_query);
      // console.log(this.queryString.name);
    }
    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
};
