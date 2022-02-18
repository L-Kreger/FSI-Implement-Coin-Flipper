// Track any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    // adding listenerz
    document.getElementById('flip').addEventListener('click', () => {
        // chance math random
        let flippedHeads = Math.random() < 0.5

        // heads and tails
        if (flippedHeads) {
            // if headz
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'Heads!'

            // if tailz
            headsRolls += 1
        }
        else {
            // image pennys
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'Tails!'

            // tails coin flipped count
            tailsRolls += 1
        }

    
        // totalz
        let total = headsRolls + tailsRolls

        // percent varibles
        let percentHeads = 0
        let percentTails = 0

        // 0 and percent
        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        headsRolls = 0
        tailsRolls = 0

        document.getElementById('message').textContent = 'Let\'s Get Flippin\''

        let total = headsRolls + tailsRolls

 
        
        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})