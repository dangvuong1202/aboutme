document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("nameAnimation");
    const name = nameElement.textContent;

    function animateName() {
        nameElement.textContent = "V"; // Xóa nội dung trong div để chuẩn bị hiển thị từng kí tự
        let index = 1;
        const interval = setInterval(() => {
            if (index < name.length) {
                nameElement.textContent += name.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                setTimeout(animateName, 1000); // Thời gian chờ trước khi bắt đầu hiển thị từ đầu
            }
        }, 1000); // Thời gian hiển thị giữa các kí tự
    }

    animateName(); // Bắt đầu hiển thị và lặp lại từng kí tự
});