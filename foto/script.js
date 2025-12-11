const driveImages = [
    "1XY3Zabcdef12345",
    "1abcDEF23456ghiJK",
    "1LmnOPqrs789TUVwx"
];

// convert ID → direct link Google Drive
function getDriveImageUrl(id) {
    return `https://drive.google.com/uc?export=view&id=${id}`;
}

const gallery = document.getElementById("gallery");

driveImages.forEach(id => {
    const img = document.createElement("img");
    img.src = getDriveImageUrl(id);
    gallery.appendChild(img);
});

