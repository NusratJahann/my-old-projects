from bs4 import BeautifulSoup 
import requests
import pandas as pd


url = "https://www.w3schools.com/js/default.asp"

# Use BeautifulSoup to scrape the links
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
a_tags = soup.find_all('a', attrs={'target': '_top'})

# Create a DataFrame with the links
# df = pd.DataFrame({'Links':  a_tag in a_tags })

mew = []
i=0
for a_tag in a_tags:
    
    mew.insert(i,a_tag.text)
    i = i + 1


df = pd.DataFrame({'Links':  mew })
# Save the DataFrame to an Excel file
df.to_excel('links2.xlsx', index=False)
