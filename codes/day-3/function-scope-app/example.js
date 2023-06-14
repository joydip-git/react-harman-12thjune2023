function resizeFactory(choice) {
    var width = 300
    switch (choice) {
        case 1:
            return function () {
                //code for resizing button using the width value
            }
            break;

        case 2:
            return function () {
                //code for resizing text
            }
            break;

        default:
            break;
    }
}
function resize() {
    var fnRef = resizeFactory(1)
    fnRef()

}