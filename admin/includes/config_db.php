<?php
function getSchema()
{
    return [
        


        'comment' => [
            'menuName' => 'Отзывы',
            'fields' => [
                'title' => [
                    'name' => 'ФИО',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'text' => [
                    'name' => 'Текст отзыва',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],
            ],
        ],
    
    ];
}