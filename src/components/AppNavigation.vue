<template>
<span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
        <v-list>
            <template>
                <v-list-tile>
                    <v-list-tile-content>
                         <router-link to="/menu">Menu</router-link>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>

                <v-list-tile>
                    <v-list-tile-content>
                         <router-link to="/Sign-in">Sign in</router-link>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>

                <v-list-tile>
                    <v-list-tile-content>
                         <router-link to="/about">Profile</router-link>
                    </v-list-tile-content>
                </v-list-tile>
                
                <v-divider></v-divider>

                <v-list-tile>
                    <v-list-tile-content>
                         <router-link to="/join">Join</router-link>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </template>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="brown darken-4" dark>
        <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <router-link to="/">
        <v-toolbar-title to="/" >{{appTitle}}</v-toolbar-title>
        </router-link>
        <v-btn  flat class="hidden-sm-and-down" to="/Menu">Menu</v-btn>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <div v-if="!isAuthenticated" class="hidden-sm-and-down"> 
        <v-btn  flat class="hidden-sm-and-down" to="/Sign-in">SIGN IN</v-btn>
        <v-btn  color="brown lighten-3" class="hidden-sm-and-down" to="/Join">JOIN</v-btn>
        </div>
        <div v-else>
        <v-btn flat to="/about">PROFILE</v-btn>
        <v-btn outline color="white" @click="logout">
            Log out
        </v-btn>
        </div>
            </v-toolbar>
</span>
</template>
<script>
export default {
    name: 'AppNavigation',
    data() {
        return{
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                {title: 'Menu', link:'/menu'},
                {title: 'Sign In', link:'/Sign-in'},
                {title: 'Profile', link:'/about'},
                {title: 'Join', link:'/join'}
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }

};
</script>
<style scoped>
a{
    color: white;
    text-decoration: none;
}
</style>
