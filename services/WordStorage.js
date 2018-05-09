export default class WordStorage {

    get() {
        return this._getMockDictionary();
    };

    _getMockDictionary() {
        return [
            {
                eng: "сat",
                rus: "кошка"
            },
            {
                eng: "dog",
                rus: "собака"
            },
            {
                eng: "mother",
                rus: "мама"
            },
            {
                eng: "father",
                rus: "папа"
            },
            {
                eng: "sister",
                rus: "сестра"
            },
            {
                eng: "brother",
                rus: "брат"
            },
            {
                eng: "apple",
                rus: "яблоко"
            }
        ];
    };

    _getEmptyMockDictionary = () => {
        return [];
    };
}