const connection  = require('../database/connection');

module.exports = {
  async index(request, response){
    const { headers: { authorization: ong_id } } = request;
    const incidents  = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*')
    return response.json(incidents)  
  }
}