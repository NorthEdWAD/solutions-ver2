#############################
# Abraham Lincoln
# 05 APR 2026
# Mad Lib
#############################

import time, random # Importing modules

# Starting mad lib lists each with 4 elements.
locations = ['Mexico','New Zealand','Wales','Chile']

animals = ['platypus','wildebeast','cow','pig']

singular_nouns = ['washing machine','whisk','saw','knife']

adjectives1 = ['parched','sorrowful','anxious','peculiar']

adjectives2 = ['hungry','elated','intellegent','horrifying']

commands = ['jump','stop','look','duck']

plural_nouns = ['people','bowls','pots','turntables']

past_participles1 = ['studied','enhanced','battered','ruined']

past_participles2 = ['traversed','whacked','skipped','reversed']

# Get first name from the user
fname = input("Please enter your first name:\n") 

print(f"\nWelcome to my Mad Lib Game, {fname}!\n") 

input("To view your randomly generated mad lib, press ENTER to continue... ") 

 # Putting a delay before the next message
time.sleep(2)

print("Generating your mad lib... Please Wait...") # Showing user that the mad lib is being generated.

# Adding a 3-second delay before the mad lib is displayed
time.sleep(3) 

# Start of mad lib
print(f'''
This one time I was living in {random.choice(locations)} and then this {random.choice(adjectives1)} {random.choice(animals)} ran up to me.
This occurance {random.choice(past_participles1)} my day which made me feel {random.choice(past_participles2)}. I went back to my home in {random.choice(locations)} 
and was greeted by my room being covered in hundreds of {random.choice(plural_nouns)}. I was {random.choice(past_participles1)} about the situation. 
From behind me a voice told me to {random.choice(commands)} and so I did. The voice came from a {random.choice(animals)} who looked very {random.choice(adjectives2)}. 
He said I needed to get a {random.choice(singular_nouns)} before 8:30 PM. I was able to get the item that he requested at around 7:12 PM. 
After a long day, I went and laid down on my {random.choice(singular_nouns)} and went to sleep.
''')


input("Press ENTER to quit the mad lib program.\n") 
