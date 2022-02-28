const connection = require('./Connection');

const fullName = ({id, firstName, middleName, lastName}) => {
    const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    };
}

const org = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName:   authorData.last_name,
})

const getAllAuthors = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    const orgAuthors = authors.map((author) => org(author)).map((author) => fullName(author));
    return orgAuthors;
};

module.exports = {
    getAllAuthors,
};