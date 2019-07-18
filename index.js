const { getDMMF } = require('@prisma/photon')
const { LiftEngine } = require('@prisma/lift')

const datamodel = `datasource db {
  provider = "sqlite"
  url      = "file:dev.db"
  default  = true
}

generator photon {
  provider = "photonjs"
  platforms = ["native", "libssl-1.1"]
  activePlatform = "libssl-1.1"
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
  const engine = new LiftEngine({
    projectDir: '.',
  })
  const config = await engine.getConfig({ datamodel })
  console.dir(config, { depth: null })
}

main()
