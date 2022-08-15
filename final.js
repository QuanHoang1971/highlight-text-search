window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handleHighlight);
  // khi input vào thì sẽ có 1 do something là handleHighlight

  // input nó sẽ lấy value(Giá trị) mỗi khi chúng ta gõ
  function handleHighlight(e) {
    let filter = e.target.value;
    filter = filter.toLowerCase();
    // dù có viết Hoa thì trong console log vẫn là chữ thường

    // spread operator  duyệt qua mỗi item
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      // đầu vào filter là chữ thường thì items cũng phải là chữ thường để so sánh dễ dàng
      // tìm ra vị trí của chữ trong 1 câu, vd xem How ở vị trí index bnh trong How to learn English

      // nếu tìm thấy vị trí index , và bao gồm filter đã tạo ở trên, chữ thường
      if (index >= 0 && text.toLowerCase().includes(filter)) {
        //nó sẽ in ra chữ từ vị trí số 0 bắt đầu nhập vào cho đến vị trí index, rồi thêm thẻ primary
        // tạo chữ màu xanh chỉ đến độ dài filter
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      } else {
        item.innerHTML = text;
        // nếu ko sẽ chỉ in ra chữ bth ko có highlight
      }
    });
  }
});
