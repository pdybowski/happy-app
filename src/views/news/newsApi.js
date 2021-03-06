import API from '../../utils/api'

export default class NewsAPI extends API {
  constructor(baseUrl, apiKey) {
    super(baseUrl, apiKey)

    this.topHeadlinesUrl = `${baseUrl}top-headlines`
    this.language = 'en'

    this.defaultHeaders = {
      'X-Api-Key': apiKey,
    }
  }

  fetch(pageNumber, country, category, searchText) {
    let options = {
      headers: this.defaultHeaders,
    }

    let query = `?language=${this.language}&page=${pageNumber}`

    if (country) {
      query += `&country=${country.isoCode}`
    }

    if (category) {
      query += `&category=${category}`
    }

    if (searchText && searchText.trim().length > 0) {
      query += `&q=${searchText}`
    }

    return super.fetch(this.topHeadlinesUrl, options, query)
  }
}
