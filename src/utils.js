// eslint-disable-next-line import/prefer-default-export, arrow-body-style
const getRandomInRange = (min = 0, max = 100) => {
    return Math.floor(min + Math.random() * (max - min + 1));
};

export default getRandomInRange;
