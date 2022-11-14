const dory = {
    name: "Dory",
    mantra() {
        console.log("Just Keep Swimming");
    },

    printThis() {
        if (this.newField === undefined) {
            console.log(
                "{\n"+
                    "name :'"+this.name+"',\n"+
                    "mantra: [Function: mantra],\n"+
                    "printThis: [Function: printThis]"+
                "\n}"
            )
        } else {
            console.log(
                "{\n"+
                    "name :'"+this.name+"',\n"+
                    "newField :'"+this.newField+"',\n"+
                    "mantra: [Function: mantra],\n"+
                    "printThis: [Function: printThis]"+
                "\n}"
            )
        }
        
    }
}


module.exports = dory;