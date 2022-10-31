const initialState = {
    posts : [ 
        {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: '02-02-2022',
        author: 'John Doe',
        category: 'music'
      },
      {
        id: '2',
        title: 'Tytuł Artykułu',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: '02-02-2022',
        author: 'Janek Kowalski',
        category: 'book'
      },
      {
        id: '3',
        title: 'Kopciuszek',
        shortDescription: 'Bajka o krasnaludkach i krówlenie',
        content: 'Main content of the article',
        publishedDate: '02-02-2022',
        author: 'Andersen',
        category: 'movies'
      }
    ],
    categories: [
      'book', 
      'music',
      'movies'
    ]
}

export default initialState;