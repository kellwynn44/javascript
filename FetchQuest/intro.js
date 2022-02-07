import classes from "./classes.js"
import dungeon from "./dungeon.js"

const intro = {
    key: "intro-scene",
    active: true,
    preload: function () {

    },
    create: function () {
        const x = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const y = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(
            x,
            y - 110,
            "Fetch Quest",
            {
                font: "160px 'serif'", //changed from Doomed for better legibility
                color: "#ffffff"
            }).setOrigin(0.5)
             //Changed all text from cfc6b8 to white for legibility reasons
        this.add.text(
            x,
            y + 30,
            //I added instructions (press the number key) so players wouldn't get
            //frustrated when a mouse click won't start the game
            "Choose your hero (press the number key)\n",
            {
                font: "28px 'serif'", //changed from Doomed
                color: "#ffffff"
            }).setOrigin(0.5)

        let classNames = Object.keys(classes)
        for (let h = 0; h < classNames.length; h++) {
            let inc = 50 * h
            this.add.text(
                x,
                y + 80 + inc,
                `${h + 1} - ${classNames[h]}`,
                {
                    font: "24px 'serif'", //changed from Doomed
                    color: "#ffffff"
                }).setOrigin(0.5)
        }

        this.input.keyboard.on("keyup", (event) => {
            let classNames = Object.keys(classes)
            let key = event.key

            if (!isNaN(Number(key))) {

                let hero = classNames[key - 1]

                if (hero) {
                    dungeon.hero = hero
                    this.scene.stop()
                    this.scene.run("ui-scene")
                    this.scene.run("world-scene")
                }
            }


        })

    },
    update: function () {

    }
}

export default intro