const genre = (genre) =>({genre})
const slide = (label, firArt,  secArt, thriArt) => ({label, firArt,  secArt, thriArt})
const art = ( ) => ({})
const game = (name, model, owner, year, rating, phone, cost) => ({name, model, owner, year, rating, phone, cost})
// принимаем набор параметров и мы будем отдавать тем у кого есть все эти поля
const log = (text, type, date = new Date()) => ({text, type, date})
const games = [
    game('Minecraft', 'Mojang Studios', 'Microsoft', '2011', "93/100", "+38 050 521 3560", "26,95 $" ),
    game('Prey', 'Arkane Studios', 'Bethesda Softworks', '2017', "79/100", "+38 050 581 3578", "29,99 $"),
    game('Hearts of Iron IV', 'Paradox Development Studio', 'Paradox Interactive', '2016', "83/100", "+38 050 595 3698", "50 $")
]
const genres = [
    genre('Action, Adventure, 3D, Sandbox, First-Person, Open world, Singleplayer, Multiplayer, Crafting, Building'),
    genre('Action, First person, Adventure,  Shooter, 3D, Singleplayer, Space, Fantasy'),
    genre('Strategy, Historic, Real-Time, Сooperation, Singleplayer')
]
const sliders = [
    slide('Исследуй собственный уникальный мир, переживи ночь и создай все, что только сможешь вообразить!', 
    'images/Minecraft.jpg', 'images/Minecraft2.jpg', 'images/Minecraft3.jpg'),
    slide('', 
    'images/prey.jpg' ,'images/prey2.jpg' ,'images/prey3.jpg'),
    slide('',
    'images/hoi4.jpg' ,'images/hoi42.jpg' ,'images/hoi43.jpg')
]
new Vue({
    el: '#app', //поиск по ид 
    data: {
        games: games, //масив cars а внутри названия машин в списке
        game: games[0], // Текущая айтем на отображение из масива
        genres: genres,
        genre: genres[0], 
        sliders: sliders,
        slide: sliders[0],
        selectedGameIndex: 0, //Синее выделение айтема списка
        phoneVisibility: false, //переменная для открытия телефона
        search: '', //переменная для поиска
        modalVisibility: false, // видимость всплыв окна
        logs: [] // массив заказов
    },
    methods:{
        selectGame: function(index){ //При нажатие на айтем в списке:     
            this.game = games[index] // изменение текущего отображаемого айтема
            this.genre = genres[index]
            this.slide = sliders[index]            
            this.selectedGameIndex = index // изменение выделенения айтема списка
        },
        selectSlide: function(index){

        },
        newOrder(){ // создание заказа
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.game.name} - ${this.game.model}`, 'ok')
            )
        },
        cancelOrder(){ // отмена заказа
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.game.name} - ${this.game.model}`, 'cnl')
            )
        }
        
    },
    computed:{ // служит для оптимизации vue прилож - юз функции котор созд перемен
        phoneBtnText(){ //отображ/неотображ телефон
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredGames(){ //функция поиска по методу фильтрации
            return this.games.filter(game=> {
                return game.name.indexOf(this.search) > -1 || genre.genre.indexOf(this.search) > -1 
            })// Если не найдёт вернёт -1 и не пройдёт проверку. айтем.нэйм(нэйм машины) сравнен с сеарч
            
            return filtered
        },
        
    },
    filters: {
        date(value){ //преобразует дату в более красивую и нужную нам
            return value.toLocaleString()
        }
    }
    
})


//BARSelona