const { getDMMF } = require('@prisma/photon')

const datamodel = `datasource db {
  provider = "sqlite"
  url      = "file:dev.db"
  default  = true
}

generator photon {
  provider = "photonjs"
}

model Product {
  id    Int    @id
  name  String
  price String
  products Product2[]
}


model Product2 {
  id    Int    @id
  name  String
}`

async function main() {
  const dmmf = await getDMMF({ datamodel })
  console.log(Object.keys(dmmf))
}

main()
