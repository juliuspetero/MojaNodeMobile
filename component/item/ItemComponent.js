import React, {useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';

import AddItemComponent from "./AddItemComponent";
import ListItemComponent from "./ListItemComponent";
import CommonUtils from "../../insfractructure/helper/CommonUtils";
import HeaderComponent from "../layout/HeaderComponent";

const ItemComponent = () => {

    const [items, setItems] = useState([
        {
            id: CommonUtils.getRandomString(),
            text: 'Milk',
        },
        {
            id: Math.random().toString(36).substring(2, 7),
            text: 'Eggs',
        },
        {
            id: Math.random().toString(36).substring(2, 7),
            text: 'Bread',
        },
        {
            id: Math.random().toString(36).substring(2, 7),
            text: 'Juice',
        },
    ]);

    // Flag true if user is currently editing an item
    const [editStatus, editStatusChange] = useState(false);

    // State to capture information about the item being edited
    const [editItemDetail, editItemDetailChange] = useState({
        id: null,
        text: null,
    });

    const [checkedItems, checkedItemChange] = useState([]);

    const deleteItem = id => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id !== id);
        });
    };

    // Submit the users edits to the overall items state
    const saveEditItem = (id, text) => {
        setItems(prevItems => {
            return prevItems.map(item =>
                item.id === editItemDetail.id ? {id, text: editItemDetail.text} : item,
            );
        });
        // Flip edit status back to false
        editStatusChange(!editStatus);
    };

    // Event handler to capture users text input as they edit an item
    const handleEditChange = text => {
        editItemDetailChange({id: editItemDetail.id, text});
    };

    const addItem = text => {
        if (!text) {
            Alert.alert(
                'No item entered',
                'Please enter an item when adding to your shopping list',
                [
                    {
                        text: 'Understood',
                        style: 'cancel',
                    },
                ],
                {cancelable: true},
            );
        } else {
            setItems(prevItems => {
                return [{id: Math.random().toString(36).substring(2, 7), text}, ...prevItems];
            });
        }
    };

    // capture old items ID and text when user clicks edit
    const editItem = (id, text) => {
        editItemDetailChange({
            id,
            text,
        });
        return editStatusChange(!editStatus);
    };

    const itemChecked = (id, text) => {
        const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
        isChecked.length
            ? // remove item from checked items state (uncheck)
            checkedItemChange(prevItems => {
                return [...prevItems.filter(item => item.id !== id)];
            })
            : // Add item to checked items state
            checkedItemChange(prevItems => {
                return [...prevItems.filter(item => item.id !== id), {id, text}];
            });
    };


    return (
        <View>
            <HeaderComponent title="Items"/>
            <AddItemComponent addItem={addItem}/>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <ListItemComponent
                        item={item}
                        deleteItem={deleteItem}
                        editItem={editItem}
                        isEditing={editStatus}
                        editItemDetail={editItemDetail}
                        saveEditItem={saveEditItem}
                        handleEditChange={handleEditChange}
                        itemChecked={itemChecked}
                        checkedItems={checkedItems}
                    />
                )}
            />
        </View>
    );
}

export default ItemComponent;