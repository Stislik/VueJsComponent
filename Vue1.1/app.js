
const slide = (label, firArt,  secArt, thriArt) => ({label, firArt,  secArt, thriArt})
//const art = ( ) => ({})
const game = (name, model, owner, date, iniDate, rating, language, cost, logo, genre) => ({name, model, owner, date, iniDate, rating, language, cost, logo, genre})
// принимаем набор параметров и мы будем отдавать тем у кого есть все эти поля
const log = (text, type, date = new Date()) => ({text, type, date})
const cart = (text, type, date = new Date()) => ({text, type, date})
const count = 0
const games = [
    game('Minecraft', 'Mojang Studios', 'Microsoft', '18.11.2011', '17.05.2009', "93/100", "English", "75$", "images/Minecraft/logo.jpg",
    'Action, Adventure, 3D, Sandbox, First-Person, Open world, Singleplayer, Multiplayer, Crafting, Building'),
    game('Prey', 'Arkane Studios', 'Bethesda Softworks', '09.09.21', '05.05.17', "79/100", "English","30$", "images/prey/logo.jpg",
    'Action, First person, Adventure,  Shooter, 3D, Singleplayer, Space, Fantasy' ),
    game('Hearts of Iron IV', 'Paradox Development Studio', 'Paradox Interactive', '06.06.2016', '09.09.21', "83/100", "English", "50 $", "images/hoi4/logo.jpg",
    'Strategy, Historic, Real-Time, Сooperation, Singleplayer')
]
//Слайды для слайдера и текст на него
const sliders = [
    slide('Досліджуй свій унікальний світ, переживи ніч і створи все, що тільки зможеш уявити!', 
    'images/Minecraft/1.jpg', 'images/Minecraft/2.jpg', 'images/Minecraft/3.jpg'),
    slide('', 
    'images/prey/1.jpg' ,'images/prey/2.jpg' ,'images/prey/3.jpg'),
    slide('',
    'images/hoi4/1.jpg' ,'images/hoi4/2.jpg' ,'images/hoi4/3.jpg')
]
// Текст в описание под слайдер
const description = (textOne, textTwo, textThred) =>({textOne, textTwo, textThred}) 
const descriptions = [
    description('Приготуйся до пригод з необмеженими можливостями: будівель, добуй ресурси, бійся з мобами і досліджуй світ Minecraft, що постійно змінюється. Борися з мобами, лад укриття і досліджуй ландшафт - все це звичайна справа, якщо ти прагнеш не просто вижити, а й процвітати в режимі виживання.'),
    description('Дія Prey відбувається у 2032 році. Ви виявляєте себе на місячній орбіті, на борту космічної станції "Талос-1". Експеримент, у якому ви брали участь, мав назавжди змінити людську расу, але призвів до катастрофічних наслідків.'),
    description('Перемога у вас під рукою! Ваша здатність керувати своєю нацією — ваша найвища зброя, стратегічна гра Hearts of Iron IV дозволяє вам взяти на себе командування будь-якою нацією у Другій світовій війні; найцікавіший конфлікт у світовій історії.',
    'Победа в ваших руках! Ваша способность вести свою страну является вашим высшим оружием, и стратегическая игра Hearts of Iron IV дает вам возможность возглавить любую нацию в ходе второй мировой войны, самого масштабного конфликта в мировой истории.',
    'От самого пекла сражений до командного центра, вы будете вести свою страну к славе и воевать, садиться за стол переговоров или организовывать вторжение. Вы можете склонить баланс в свою пользу в ходе второй мировой войны. Настало время продемонстрировать свои способности в качестве величайшего военного лидера в мире. Вы возродите или измените историю? Измените ли вы судьбу мира, достигнув победы любой ценой?')
]
//Минимальные сист. требования
const characteristicMin = (os, cpu, gpu, ram, memory) =>({os, cpu, gpu, ram, memory})
const characteristicsMin = [
    characteristicMin("Windows XP/7/8/10", " Intel Pentium 4, AMD Athlon XP 2200+", "GTX 8600, ATI Radeon HD 2600", "1GB", "1GB free space"),
    characteristicMin("Windows 7/8/10", "Intel i5-2400, AMD FX-8320", "GTX 660 2 GB, AMD Radeon 7850 2 GB", "8GB", "20GB free space"),
    characteristicMin("Windows 7/8/10", "Intel i5 750, AMD FX 4300", "GTX 470 1.28GB, AMD HD 5850 1GB", "4GB", "2GB free space")
]  
//Рекомендуемые сист. требования
const characteristicMid = (os, cpu, gpu, ram, memory) =>({os, cpu, gpu, ram, memory})
const characteristicsMid = [
    characteristicMid("Windows 7/8/10", "Intel Core i7-6xxx with 3.5 GHz", "GTX 1050", "8GB", "10GB free space"),
    characteristicMid("Windows 7/8/10", "Intel i7-2600K, AMD FX-8350", "GTX 970 4 GB, AMD R9 290 4 GB", "16GB", "20GB free space"),
    characteristicMid("Windows 10", "Intel i5 2500K, AMD Ryzen 3 2200G", "GTX 570 1.28GB, AMD HD 7970 3GB", "6GB", "2GB")
    
]

new Vue({
    el: '#site',                         //поиск по ид 
    data: {
        games: games,                   //масив cars а внутри названия машин в списке
        game: games[0],                 // Текущая айтем на отображение из масива
        sliders: sliders,               //слайды в карусель
        slide: sliders[0],              
        descriptions: descriptions,     //описание
        description: descriptions[0],
        characteristicsMin: characteristicsMin,
        characteristicMin: characteristicsMin[0],
        characteristicsMid: characteristicsMid,
        characteristicMid: characteristicsMid[0],
        searchVisibility:false,
        selectedGameIndex: 0,           //Синее выделение айтема списка
        search: '',                     //переменная для поиска
        modalVisibility: false,         // видимость всплыв окна
        modalCartVisibility: false,
        logs: [],                       // массив заказов
        cart: [],

    },
    methods:{
        selectGame: function(index){ //При нажатие на айтем в списке:     
            this.game = games[index] // изменение текущего отображаемого айтема
            this.slide = sliders[index]
            this.description = descriptions[index]    
            this.characteristicMin = characteristicsMin[index]
            this.characteristicMid = characteristicsMid[index]   
            this.selectedGameIndex = index // изменение выделенения айтема списка
        },
        newOrder(){ // создание заказа
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.game.name} - ${this.game.cost}`, 'ok')
            )
        },
        cancelOrder(){ // отмена заказа
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.game.name} - ${this.game.cost}`, 'cnl')
            )
        },
        showFinalCart(){
            this.modalCartVisibility = true        
        },
        check(){
            this.carts.push(
                cart(`Count: ${this.game.year} - ${this.game.name}`, 'cnl')
            )
        },
        cancelCartOrder(){
            this.modalCartVisibility = false
            this.logs.push(
                log(`Cancelled order`, 'cnl')
            )
        },
        
    },
    computed:{ // служит для оптимизации vue прилож - юз функции котор созд перемен
        filteredGames(){ //функция поиска по методу фильтрации
            that = this;
            return this.games.filter(game=> {
                return game.name.indexOf(this.search) > -1 || that.game.genre.indexOf(this.search) > -1
            })// Если не найдёт вернёт -1 и не пройдёт проверку.             
            return filtered
        },
        
    },
    filters: {
        date(value){ //преобразует дату в более красивую и нужную нам
            return value.toLocaleString()
        }
    }
    
})
