const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // return 'get wired'
  return db('shippers')
}

async function getById(id) {
  // return 'getById wired'
  return db('shippers').where('ShipperID', id).first()
}

async function create({ ShipperName, Phone }) {
  let [id] = await db('shippers').insert({ ShipperName, Phone });
  return {
    ShipperName,
    Phone,
    ShipperId: id,
  };
}

// async function create(shipper) {
//   // return 'create wired'
//   const [id] = await db('shippers').insert(shipper)
//   return getById(id)
// }
async function update(id, { ShipperName, Phone }) {
  await db('shippers').where({ ShipperId: id }).update({ ShipperName, Phone });
  return {
    ShipperName,
    Phone,
    ShipperId: id,
  };
}
// async function update(id, change) {
//   // return 'update wired'
//   await db('shippers').where('ShipperId', id).update(change) 
//   return getById(id)
// }

async function remove(id) {
  // return 'delete wired'
  let result = await getById(id)
  // await db('shippers').where('ShipperId', id).del()
  await db('shippers').where({ shipperid: id }).del();
  return result
}
