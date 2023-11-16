/*const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))*/

const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

function downloadFile(e) {
    // 防止按鈕執行預設動作
    e.preventDefault();

    const link = this.getAttribute('download-link');
    console.log(link);

    const a = document.createElement('a');
    a.href = link;


    // 將 <a> 元素附加到文件
    document.body.appendChild(a);

    // 模擬點擊 <a> 元素以啟動下載
    a.click();

    // 移除 <a> 元素，避免對頁面產生影響
    document.body.removeChild(a);
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', downloadFile));

