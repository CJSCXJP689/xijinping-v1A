namespace SpriteKind {
    export const Boss1 = SpriteKind.create()
    export const ammo = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖2`, function (sprite, location) {
    game.splash("有一點難打開")
    game.splash("用力中")
    game.splash("1")
    game.splash("2")
    game.splash("3")
    game.splash("4")
    game.splash("5")
    game.splash("6")
    game.splash("7")
    game.splash("8964")
    game.splash("滿臉噴糞了cao")
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    machine_1 += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -70
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ammo, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 500)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    game.splash("the door opens")
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(7, 3), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(7, 4), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    mySprite.startEffect(effects.fire, 2000)
    info.changeLifeBy(-1)
    if (map == 0) {
        tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    } else if (map == 1) {
        tiles.setTileAt(location, sprites.dungeon.floorLight2)
    } else if (false) {
    	
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss1, function (sprite, otherSprite) {
    sprite.destroy(effects.rings, 500)
    boss_health += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.splash("the door is locked ")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖1`, function (sprite, location) {
    game.splash("I am mao zedong")
    if (machine_1 == 0) {
        game.splash("我要沼氣")
        game.splash("給我的話我給你開門")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 10))
    }
    if (machine_1 == 1) {
        game.splash("thank you ")
        game.splash("I love china")
        tiles.setTileAt(location, sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(7, 6), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(7, 7), sprites.dungeon.floorLight2)
        game.splash("fix the machine")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.splash("the end of ch1")
    game.splash("thank for play")
    info.setScore(8964)
    game.over(true, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    game.splash("the lava disappear")
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(10, 13), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(11, 13), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.splash("the door is locked ")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 18))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -70
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        . 5 . . . . . . . . . . . . . 5 
        . 5 5 . . . . e . . . . 5 5 5 5 
        . . 5 5 . . e e e . . . 5 . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e e e e e e e e e e . . . 
        . . e e e e e e e e e e e . . . 
        . . e e e e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -56)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
    map += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    game.splash("the lava disappear")
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(10, 10), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(11, 10), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    game.splash("吾名蔣介石!")
    mySprite2 = sprites.create(img`
        . . 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 . 
        . 4 f 4 4 4 f 4 . 
        . 4 4 4 4 4 4 4 . 
        . 4 4 f f 4 4 4 . 
        . 4 4 4 4 4 4 4 . 
        . 4 f f f f 4 4 . 
        `, SpriteKind.Boss1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 13))
    boss_fight1 += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.splash("the door is locked")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let map = 0
let machine_1 = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`層級1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f . . . 
    . . d d d d d d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . f f d d d d d d d f f . . . 
    . . f f d d d d d d d f f . . . 
    . . d d d d d d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
info.setLife(2)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles2)
controller.moveSprite(mySprite, -70, 0)
controller.moveSprite(mySprite, 70, 0)
machine_1 = 0
map = 0
let boss_fight1 = 0
let boss_health = 35
game.onUpdateInterval(2000, function () {
    if (boss_fight1 == 1) {
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(0, 5), 7))
    }
})
forever(function () {
    mySprite.ay = 100
})
forever(function () {
    if (0 >= boss_health) {
        mySprite.sayText("I won", 500, false)
        boss_fight1 = 2
        tiles.setTileAt(tiles.getTileLocation(7, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(7, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(0, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(1, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(2, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(3, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(4, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(5, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(6, 17), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(0, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(1, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(2, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(3, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(4, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(5, 18), sprites.dungeon.floorLight2)
        tiles.setTileAt(tiles.getTileLocation(6, 18), sprites.dungeon.floorLight2)
        boss_health = 1
        mySprite2.destroy(effects.spray, 500)
    }
})
forever(function () {
    if (boss_fight1 == 1) {
        tiles.setTileAt(tiles.getTileLocation(0, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(1, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(2, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(3, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(4, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(5, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(6, 17), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(0, 18), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(1, 18), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(2, 18), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(3, 18), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(4, 18), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(5, 18), sprites.dungeon.hazardLava0)
        tiles.setTileAt(tiles.getTileLocation(6, 18), sprites.dungeon.hazardLava0)
    }
})
