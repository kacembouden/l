

t = Conditions('ULAH22', mt5.TIMEFRAME_M15)

t.Traitement()

t.cons_D


t = Eng('EURUSD', mt5.TIMEFRAME_H1)


t.eng_con_2()
t.cons_eng_D
t.starting_index_eng


list(t.cons['cycle'][t.starting_index_D::])


t.cons[t.starting_index::]




myseries = t.cons[t.starting_index_D::]

myseries.index[myseries['O'] == True].tolist()[0]


t.cons[['time' , 'cycle']][t.starting_index::]

t.cons[['time' , 'con_rsi3' ]].iloc[-15::]

t.df[['time' ,'rsi_tf15_3']].iloc[t.starting_index_D::]

t.df[['time' ,'stock_tf15']].iloc[t.starting_index_D::]

i = 425

t.cons_D['cycle'].iloc[i - 1] == 'j' and t.df['stock_tf' + str(t.TF)].iloc[i] < 75

t1 = Zone('GBPUSD', mt5.TIMEFRAME_M1)

t1.



t.res_final[t.res_final['SMA_reached'] == 'N']['Profit_reached'].sum()

if not mt5.initialize(r"C:\Program Files\FBS MetaTrader 5\terminal64.exe"):
    print("initialize() failed, error code =", mt5.last_error())


positions[0].ticket

change_request = {
    "action": mt5.TRADE_ACTION_SLTP,
    "position": positions[0].ticket,
    "symbol": curr,
    #"sl": 115.0,
    "tp": 114.6,
    "magic": 234000,
    "comment": "python script open",

}

result = mt5.order_send(change_request)

lot_eq = {'EURUSD' : 1.0, 'GBPUSD': 1.0, 'USDCAD':1.268247 , 'USDJPY' : 1.1505 ,'USDCHF' : 0.9357,'GBPJPY' : 1.15,'GBPCHF' :0.9357,'GBPCAD':1.2682,
                     'EURJPY' : 1.15,'EURGBP':0.7483,'EURCHF' : 0.9357,'EURCAD' : 1.2682,'CHFJPY' : 1.1504,'CADCHF' : 0.9357,'AUDNZD' : 1.4466,'AUDCAD':1.2682,'AUDCHF':0.9357,
                     'AUDJPY':1.15,'EURAUD':1.3853,'AUDUSD':1.0,'EURNZD':1.4466,'NZDUSD':1.0,'GBPAUD' : 1.3853,'GBPNZD' : 1.4466 ,'NZDCAD' :1.2682,
                     'NZDCHF' : 0.9357,'NZDJPY' :1.1504 }

if not mt5.initialize(r"C:\Program Files\FBS MetaTrader 5\terminal64.exe"):
    print("initialize() failed, error code =", mt5.last_error())
    quit()

# get the number of deals in history
from_date = datetime.datetime.now() - datetime.timedelta(hours =3)
to_date = datetime.datetime.now()
deals = mt5.history_deals_get(from_date, to_date, group='EURUSD')
if deals > 0:
    print("Total deals=", deals)
else:
    print("Deals not found in history")

# shut down connection to the MetaTrader 5 terminal
mt5.shutdown()

l = list(t.cons_D['cycle'][t.starting_index_D::])
res123 = l.index([idx for idx in l if idx.startswith('O')][0])
if t.cons_D['con_sma5'][t.starting_index_D + res123 ]:
    t.final_U += 'sma'

if not mt5.initialize(r"C:\Program Files\FBS MetaTrader 5\terminal64.exe"):
    print("initialize() failed, error code =", mt5.last_error())


request = {
    "action": mt5.TRADE_ACTION_PENDING,
    "symbol": symbol,
    "volume": lot3,
    "type": mt5.ORDER_TYPE_BUY_LIMIT,
    "price": price + spread_in_point,
    "sl": sl1,
    "tp": t.res_D['ema_tf15_12'].iloc[-1],
    "deviation": deviation,
    "magic": 234000,
    "comment": "python script open",
    "type_time": mt5.ORDER_TIME_SPECIFIED,
    "expiration": exp_date,
    "type_filling": mt5.ORDER_FILLING_FOK,
}

mt5.order_send(request)

(t.df['close_tf' + str(t.TF)] < t.df['open_tf' + str(t.TF)]) & (t.df['close_tf' + str(t.TF)].shift(+1) > t.df['open_tf' + str(t.TF)].shift(+1)) & (t.df['close_tf' + str(t.TF)] < t.df['low_tf' + str(t.TF)].shift(+1)) & (t.df['rsi_tf' + str(t.TF) + '_' + str(3)] < 75)


rr = t.cons_D['acc'][::-1].idxmax()

rr1 = t.cons_D['acc'][:rr][::-1].idxmin()

rr2 = t.cons_D['acc'][:rr1][::-1].idxmax()

rr3 = t.cons_D['acc'][:rr2][::-1].idxmin()

t.cons_D['acc'].iloc[rr1+1 : rr+1]

t.cons_D['acc'].iloc[rr3+1 : rr2+1]

rsidiv1 = t.df['rsi_tf' + str(t.TF) + '_14'].iloc[rr1+1 : rr+1].max()

rsidiv2 = t.df['rsi_tf' + str(t.TF) + '_14'].iloc[rr3+1 : rr2+1].max()

rsimindiv = t.df['rsi_tf' + str(t.TF) + '_14'].iloc[rr2+1 : rr1+1].min()

if rsimindiv > 50 and rsidiv1 < rsidiv2:
    divergence = True



def fun()


def addition(self, curr):
    all_results = []
    for TFi in self.TFs:
        test1 = Conditions(curr, TFi)
        signal = test1.Traitement()
        all_results.append(signal)
    return all_results