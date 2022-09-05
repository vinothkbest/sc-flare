import Vue from 'vue'

Vue.mixin({
    methods:{
        chunk: function (array, size){
            let result = []
            let arrayCopy = [...array]
            while (arrayCopy.length > 0) {
                result.push(arrayCopy.splice(0, size))
            }
            return result
        },
        ucfirst : function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        dateParse : function (string) {
            var event = new Date(string);
            let date = JSON.stringify(event)
            return date.slice(1,11)
        },
        parseSocial: function(socials){
            let data = Object.entries(socials).filter(social => {
                return social[1].state==true
            }).map(social => {
                return [social[0], social[1].link];
            })
            
            return data;
        },
        audioNotify: function(text){
            let speech = new SpeechSynthesisUtterance();
            speech.lang = 'US-en';
            speech.volume = 1;
            speech.text = text;
            let has_audio = JSON.parse(this.$store.state.has_audio)    
            if(has_audio){
                return speechSynthesis.speak(speech);
            }
            return 'none';
        },
        slugToText: function(text){
            return text.split('-').join(' ');
        },
        getRSVP: function({has_rsvp,invitee_type}){
            if(!has_rsvp){
                return rsvpList = [];
            }
            let rsvpList = [
                {
                    resp:0,
                    button:'I will Not Attend',
                    label:'regretted',
                    color:'#ff1a25'
                },
                {
                    resp:1,
                    button:'I will Attend',
                    label:'accepted',
                    color:'#32e24f'
                }
            ];
                    
            switch (invitee_type) {
                case 2:
                    rsvpList = [
                        ...rsvpList,
                        {resp: 2, label:'accepted-with-spouse', button:'I Will Attend With Spouse', color:'#3c92c8'}
                    ];
                    break;
            
                
                case 3:
                    rsvpList = [
                        ...rsvpList,
                        {resp: 2, label:'accepted-with-spouse',button:'I Will Attend With Spouse', color:'#3c92c8'},
                        {resp: 3, label:'accepted-with-family',button:'I Will Attend With Family', color:'#b14Fde'}
                    ];
                    break;
            }
            return rsvpList;
        }
    }
})