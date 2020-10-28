<template>
<v-container>
    <v-row class="justify-center">
        <v-card class="pa-5" width="730" height="500" elevation="12">
            <v-row class="justify-center">
                <div class="text-h3 d-flex justify-center">Login</div>
            </v-row>
                <v-text-field
                class="ml-auto mr-auto"
                name="email"
                label="Email Address"
                dense
                outlined
                >
                </v-text-field>
            
        </v-card>
    </v-row>
</v-container>
</template>


<style scoped>
.v-text-field{
    width: 350px;
}

</style>