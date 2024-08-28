import pandas as pd

# Simple data processing script
data = pd.read_csv('data/sample-data.csv')
data['value'] = data['value'] * 2  # Example modification
data.to_csv('data/processed-data.csv', index=False)
