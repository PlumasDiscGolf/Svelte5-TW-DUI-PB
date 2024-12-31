/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1767766964",
    "max": null,
    "min": null,
    "name": "par",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // remove field
  collection.fields.removeById("number1767766964")

  return app.save(collection)
})