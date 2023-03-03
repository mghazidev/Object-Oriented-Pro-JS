let hr = {
    salary: 1000,

    deposit: function(amount) {
        this.salary += amount
    },



    rent: function(houserent) {
        if(houserent <= this.salary) {
            this.salary -= houserent;
        } else {
            console.log("No rent get out");
        }
    }
};

console.log(hr.salary);
hr.deposit(1000);
console.log(hr.salary);
hr.rent(500);
