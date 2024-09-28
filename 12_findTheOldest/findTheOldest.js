const findTheOldest = function(peeps) {
    const sortedPeeps = peeps
        .sort((a,b) => {

            if(a.yearOfDeath === undefined){
                a.yearOfDeath = new Date().getFullYear();
            }

            if(b.yearOfDeath === undefined){
                b.yearOfDeath = new Date().getFullYear();
            }


            const firstPeep = a.yearOfDeath - a.yearOfBirth;
            const nextPeep = b.yearOfDeath - b.yearOfBirth;

            return firstPeep > nextPeep ? -1 : 1;
        }
    );

    return sortedPeeps[0];
};

// Do not edit below this line
module.exports = findTheOldest;
