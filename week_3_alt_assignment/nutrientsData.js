const nutrients = {
    protein: {
        name: "Protein",
        sources: ["Meat", "Fish", "Beans", "Nuts", "Dairy", "Eggs"],
    },
    carbohydrate: {
        name: "Carbohydrate",
        sources: ["Grains", "Fruits", "Vegetables", "Legumes", "Bread", "Pasta"],
    },
    fat: {
        name: "Fat",
        sources: ["Oils", "Nuts", "Dairy Products", "Avocado", "Fatty Fish"],
    },
    vitamin: {
        name: "Vitamin",
        sources: ["Fruits", "Vegetables", "Supplements", "Meat", "Fish"],
    },
    mineral: {
        name: "Mineral",
        sources: ["Leafy Greens", "Dairy", "Nuts", "Whole Grains"],
    },
};

Object.keys(nutrients).forEach((nutrientKey) => {
    const nutrientInfo = nutrients[nutrientKey];
    const singularName = nutrientInfo.name;
    const pluralName = `${singularName}s`;

    nutrients[pluralName.toLowerCase()] = nutrientInfo;
});

module.exports = { nutrients };