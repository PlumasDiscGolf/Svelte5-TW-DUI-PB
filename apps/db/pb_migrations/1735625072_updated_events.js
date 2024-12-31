/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1942858786",
    "hidden": false,
    "id": "relation624830041",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1942858786",
    "hidden": false,
    "id": "relation624830041",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "location_",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})